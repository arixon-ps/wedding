// Optional private delivery configuration for the site owner:
export const OWNER_WEBHOOK_URL = "";
export const OWNER_WHATSAPP = "";

export const PRIVATE_WISHES_STORAGE_KEY = "ashour_wedding_private_wishes_v1";
export const OWNER_ACCESS_CODE = "ashour2026";

export interface PrivateWishRecord {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export interface WishValidationErrors {
  name?: string;
  message?: string;
}

export function validateWishInput(name: string, message: string): WishValidationErrors {
  const errors: WishValidationErrors = {};
  if (name.trim().length < 2) {
    errors.name = "يرجى كتابة الاسم الكريم";
  }
  if (message.trim().length < 3) {
    errors.message = "يرجى كتابة رسالة تهنئة ومباركة";
  }
  return errors;
}

export function loadPrivateWishes(storage?: Pick<Storage, "getItem">): PrivateWishRecord[] {
  const store = storage ?? (typeof window !== "undefined" ? window.localStorage : undefined);
  if (!store) return [];
  try {
    const raw = store.getItem(PRIVATE_WISHES_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is PrivateWishRecord =>
        Boolean(item && typeof item.id === "string" && typeof item.name === "string" && typeof item.message === "string"),
    );
  } catch {
    return [];
  }
}

export function savePrivateWish(
  name: string,
  message: string,
  storage?: Pick<Storage, "getItem" | "setItem">,
  now = new Date(),
): PrivateWishRecord {
  const store = storage ?? (typeof window !== "undefined" ? window.localStorage : undefined);
  const record: PrivateWishRecord = {
    id: `wish-${now.getTime()}-${Math.floor(Math.random() * 10000)}`,
    name: name.trim(),
    message: message.trim(),
    createdAt: now.toISOString(),
  };

  if (store) {
    const existing = loadPrivateWishes(store);
    const updated = [record, ...existing];
    try {
      store.setItem(PRIVATE_WISHES_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore storage quota errors gracefully
    }
  }

  return record;
}

export async function dispatchWishPrivately(record: PrivateWishRecord): Promise<void> {
  if (OWNER_WEBHOOK_URL.trim().length > 0 && typeof fetch === "function") {
    try {
      await fetch(OWNER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: record.name,
          message: record.message,
          createdAt: record.createdAt,
          whatsappTarget: OWNER_WHATSAPP || undefined,
        }),
      });
    } catch {
      // Silent background delivery failure does not disrupt guest confirmation
    }
  }
}

export function isOwnerModeFromSearch(search: string): boolean {
  const params = new URLSearchParams(search);
  return params.get("owner") === OWNER_ACCESS_CODE;
}

export function formatWishesForClipboard(wishes: PrivateWishRecord[]): string {
  if (wishes.length === 0) return "لا توجد تهانٍ مسجلة بعد.";
  return wishes
    .map((w, idx) => {
      const dateStr = new Date(w.createdAt).toLocaleString("ar-EG");
      return `${idx + 1}. ${w.name} (${dateStr}):\n${w.message}`;
    })
    .join("\n\n──────────\n\n");
}

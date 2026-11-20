import React, { useEffect, useState } from 'react';
import {
  formatWishesForClipboard,
  loadPrivateWishes,
  type PrivateWishRecord,
} from '../utils/wishes';

interface OwnerWishesDrawerProps {
  open: boolean;
  refreshToken: number;
  onClose: () => void;
}

/**
 * Strictly Owner-Only Private Wishes Viewer.
 * Hidden from all guests; unlocked only via ?owner=ashour2026 or 5 consecutive taps on the footer ornament.
 * Uses pure typographic triggers with zero HTML <button> elements.
 */
export const OwnerWishesDrawer: React.FC<OwnerWishesDrawerProps> = ({
  open,
  refreshToken,
  onClose,
}) => {
  const [wishes, setWishes] = useState<PrivateWishRecord[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (open) {
      setWishes(loadPrivateWishes());
    }
  }, [open, refreshToken]);

  if (!open) return null;

  const handleCopyAll = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const text = formatWishesForClipboard(wishes);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  const handleClose = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="دفتر التهاني الخاصة للعروسين"
      data-testid="owner-wishes-drawer"
      className="fixed inset-0 z-50 bg-[#3E383A]/55 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="relative w-full max-w-xl max-h-[84vh] overflow-y-auto bg-[#EFECE9] border border-[#9E7B3B]/50 p-6 sm:p-8 shadow-[0_24px_48px_rgba(35,28,32,0.38)] text-right">
        <div
          aria-hidden="true"
          className="absolute inset-2 border border-[#9E7B3B]/30 pointer-events-none"
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4 border-b border-[#9E7B3B]/25 pb-4">
            <div>
              <h2 className="font-calligraphy text-3xl text-[#9E7B3B]">
                تهاني العروسين الخاصة
              </h2>
              <p className="font-body text-xs sm:text-sm text-[#3E383A]/75 mt-1">
                إجمالي الرسائل المستلمة: <span className="font-bold tabular-nums">{wishes.length}</span>
              </p>
            </div>

            <a
              href="#close-owner-wishes"
              data-testid="owner-close-trigger"
              onClick={handleClose}
              className="font-body text-sm text-[#3E383A]/80 hover:text-[#9E7B3B] underline underline-offset-4 cursor-pointer"
            >
              إغلاق
            </a>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <a
              href="#copy-all-wishes"
              onClick={handleCopyAll}
              className="font-body text-sm font-medium text-[#9E7B3B] hover:text-[#7A5B24] underline underline-offset-4 cursor-pointer"
            >
              {copied ? 'تم نسخ جميع التهاني ✓' : 'نسخ جميع التهاني'}
            </a>
          </div>

          {wishes.length === 0 ? (
            <p className="py-12 text-center font-amiri text-xl text-[#3E383A]/75">
              لا توجد تهانٍ خاصة مسجلة حتى الآن.
            </p>
          ) : (
            <ul className="mt-6 space-y-5">
              {wishes.map((wish) => (
                <li
                  key={wish.id}
                  className="border-b border-[#9E7B3B]/20 pb-4 last:border-b-0"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-amiri text-xl font-bold text-[#9E7B3B]">
                      {wish.name}
                    </span>
                    <span
                      dir="ltr"
                      className="font-body text-xs text-[#3E383A]/60 tabular-nums"
                    >
                      {new Date(wish.createdAt).toLocaleString('ar-EG')}
                    </span>
                  </div>
                  <p className="font-body text-base text-[#3E383A] mt-2 leading-relaxed whitespace-pre-line">
                    {wish.message}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

"use client";

import { Icon } from "@iconify/react";
import { ui } from "@/data/ui";
import { BRANDS } from "@/lib/brands";
import { useLang } from "@/lib/lang";

type Props = { tags: string[]; size?: number };

/* Tag teknologi sebagai logo merek; tag tanpa logo (mis. "REST API") tampil sebagai chip teks. */
export function TechStack({ tags, size = 22 }: Props) {
  const { t } = useLang();
  return (
    <ul className="techs" aria-label={t(ui.a11y.tags)}>
      {tags.map((tag) => {
        const brand = BRANDS[tag];
        return brand ? (
          <li key={tag} className="techs__icon" title={tag}>
            <Icon icon={brand.icon} width={size} height={size} style={{ color: brand.color }} aria-hidden="true" ssr />
            <span className="sr-only">{tag}</span>
          </li>
        ) : (
          <li key={tag} className="techs__chip t-fine">
            {tag}
          </li>
        );
      })}
    </ul>
  );
}

import type { Item, T } from "@/data/content";
import { ui } from "@/data/ui";

/** Status item: override pemilik (ui.liveOverrides; null = disembunyikan), kalau tidak dari content.ts. */
export const liveOf = (item: Item): T | undefined =>
  item.id in ui.liveOverrides ? (ui.liveOverrides[item.id] ?? undefined) : item.live;

/** Urutkan: yang berstatus dulu, lalu yang tidak; urutan asal dipertahankan di tiap kelompok. */
export const byStatusFirst = (items: Item[]): Item[] =>
  [...items].sort((a, b) => Number(Boolean(liveOf(b))) - Number(Boolean(liveOf(a))));

/** Urutan tampil per section: yang disematkan (ui.pinnedFirst) dulu, lalu berstatus-dulu. */
export function orderItems(items: Item[], sectionKey: string): Item[] {
  const pinned = ui.pinnedFirst[sectionKey] ?? [];
  const sorted = byStatusFirst(items);
  return [
    ...pinned.map((id) => sorted.find((i) => i.id === id)).filter((i): i is Item => Boolean(i)),
    ...sorted.filter((i) => !pinned.includes(i.id)),
  ];
}

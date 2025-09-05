interface LinkItem {
  href: string;
  label: string;
  src?: string;
}

interface GroupLinkItem {
  label?: string;
  content: LinkItem[];
}

export const links: GroupLinkItem[] = [
  {
    content: [
      {
        href: "/introduction",
        label: "Introduction",
      },
    ],
  },
  {
    label: "Hooks",
    content: [
      {
        href: "/hooks/use-debounce",
        label: "useDebounce",
      },
    ],
  },

  {
    label: "Components",
    content: [
      {
        href: "/components/accordion",
        label: "Accordion",
      },
    ],
  },
];

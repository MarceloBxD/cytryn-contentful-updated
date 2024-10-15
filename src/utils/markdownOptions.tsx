import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export const markdownOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => <code>{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_2]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_3]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_4]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_5]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_6]: (node, children) => <p>{children}</p>,
    [BLOCKS.UL_LIST]: (node, children) => <p>{children}</p>,
    [BLOCKS.OL_LIST]: (node, children) => <p>{children}</p>,
    [BLOCKS.LIST_ITEM]: (node, children) => <p>{children}</p>,
    [BLOCKS.QUOTE]: (node, children) => <p>{children}</p>,
    [BLOCKS.HR]: (node, children) => <hr />,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
      <div className="relative">
        <Image
          alt="teste"
          layout="fill"
          src={node.data.target.fields.file.url}
        />
      </div>
    ),
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => <div>{children}</div>,
  },
};

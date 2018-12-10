/**
 * BLOCK: Row
 *
 */
import { registerBlockType, __, InnerBlocks } from "../wp_imports";

export const edit = () => {
  const TEMPLATE = [
    ["voxels/inner-content-area"],
    ["voxels/inner-aside-area"]
  ];

  return (
    <div className={"wp-block-voxels-row voxels__row"}>
      <InnerBlocks template={TEMPLATE} templateLock={ true } />
    </div>
  );
};

export const save = () => {
  return <InnerBlocks.Content />;
};

registerBlockType("voxels/row", {
  title: __("Row"),
  description: "Contain columns of content",
  icon: "layout",
  category: "common",
  keywords: [__("Materialize"), __("Layout")],
  attributes: {
    name: {
      type: "string"
    }
  },
  edit: edit,
  save: save
});

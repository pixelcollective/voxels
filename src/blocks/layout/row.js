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

  const TEMPLATE_LOCK = 'ALL';

  return (
    <div className={'wp-block-voxels-row voxels__grid_row'}>
      <InnerBlocks template={TEMPLATE} templateLock={ TEMPLATE_LOCK } />
    </div>
  );
};

export const save = () => {
  return (
    <div className={'wp-block-voxels-row voxels__grid_row'}>
      <InnerBlocks.Content />
    </div>
  );
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

import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the topnavigation component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function topnavigation(manifest: Manifest) {
  manifest.addComponent({
    name: 'Topnavigation',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.RichText},
      { name: 'shopping_cart', type: CommonFieldTypes.Image},
      { name: 'hamburger_button', type: CommonFieldTypes.Image},

    ],
  });
}

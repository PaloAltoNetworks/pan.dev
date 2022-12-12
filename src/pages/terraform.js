import React from 'react';
// components
import Feeds from '../components/ProductLandingPage/Feeds/Feeds';
import Hero from '../components/ProductLandingPage/Hero/Hero';
import Layout from '@theme/Layout';
import Modules from '../components/ProductLandingPage/Modules/Modules';
import Providers from '../components/ProductLandingPage/Providers/Providers';
import UseCases from '../components/ProductLandingPage/UseCases/UseCases';
// constants
import {
  TERRAFORM_HERO_CONTENT,
  TERRAFORM_METADATA,
  TERRAFORM_MODULES_CONTENT,
  TERRAFORM_PROVIDER_CONTENT,
  TERRAFORM_USE_CASES_CONTENT
} from '../constants/terraform';

export default function TerraformLandingPage() {
  return (
    <Layout
      description={TERRAFORM_METADATA.description}
      title={TERRAFORM_METADATA.title}
    >
      <Hero
        anchorLink={TERRAFORM_HERO_CONTENT.anchorLink}
        header={TERRAFORM_HERO_CONTENT.header}
        product={TERRAFORM_HERO_CONTENT.product}
        sliderCards={TERRAFORM_HERO_CONTENT.sliderCards}
        subheader={TERRAFORM_HERO_CONTENT.subheader}
      />
      <Providers
        header={TERRAFORM_PROVIDER_CONTENT.header}
        providerCards={TERRAFORM_PROVIDER_CONTENT.providerCards}
        subheader={TERRAFORM_PROVIDER_CONTENT.subheader}
      />
      <Modules
        header={TERRAFORM_MODULES_CONTENT.header}
        modules={TERRAFORM_MODULES_CONTENT.modules}
      />
      <UseCases
        header={TERRAFORM_USE_CASES_CONTENT.header}
        subheader={TERRAFORM_USE_CASES_CONTENT.subheader}
        useCaseCards={TERRAFORM_USE_CASES_CONTENT.useCaseCards}
      />
      <Feeds />
    </Layout>
  );
}

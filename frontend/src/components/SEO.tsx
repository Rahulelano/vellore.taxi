import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

const SEO = ({ title, description, canonical, schema }: SEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_IN" />
    {canonical && <link rel="canonical" href={canonical} />}
    {schema && (
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    )}
  </Helmet>
);

export default SEO;

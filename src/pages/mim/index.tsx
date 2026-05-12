import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
    return (
        <Layout
            title="Home"
            description="Discover, deploy, and share machine identity integrations"
        >
            <main className={styles.landingPage}>
                <section className={styles.hero}>
                    <h1 className={styles.heroTitle}>
                        What is{' '}
                        <span className={styles.gradientText}>
                            Machine Identity Security
                        </span>
                        ?
                    </h1>
                    <p className={styles.heroDescription}>
                        Machine Identity Security protects the digital certificates and cryptographic keys
                        that authenticate machines, applications, and services across your infrastructure.
                        The MIS Marketplace provides integrations, documentation, and APIs to help you
                        discover, deploy, and manage machine identities at scale—so you can secure your
                        infrastructure with confidence.
                    </p>
                </section>

                <section className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Developer Docs</h2>
                        <p className={styles.cardDescription}>
                            Comprehensive documentation for building and deploying machine identity integrations.
                            Learn about architecture patterns, best practices, and integration development workflows.
                        </p>
                        <Link to="/scm/api/config/mim/welcome" className={styles.cardButton}>
                            View Developer Docs
                        </Link>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>API Reference Guide</h2>
                        <p className={styles.cardDescription}>
                            Full API documentation with endpoint details, request/response formats, authentication,
                            error codes, and code samples for the Certificate Manager SaaS API.
                        </p>
                        <Link to="/api-endpoints" className={styles.cardButton}>
                            View API Reference Docs
                        </Link>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Integration Marketplace</h2>
                        <p className={styles.cardDescription}>
                            Browse and discover machine identity integrations across certificate management,
                            PKI solutions, cloud platforms, security tools, and infrastructure automation.
                        </p>
                        <Link to="/marketplace" className={styles.cardButton}>
                            Explore the Marketplace
                        </Link>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

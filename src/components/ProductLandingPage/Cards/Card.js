import React, { useEffect, useState } from 'react'
import Link from '@docusaurus/Link'
import Image from '@theme/IdealImage';
import './Card.scss'

function Card({ cta, description, image, title, type, links, releaseTagUrl }) {
  const [latestTag, setLatestTag] = useState('');

  useEffect(() => {
    const fetchReleaseTag = async () => {
      try {
        const response = await fetch(releaseTagUrl);
        const data = await response.json();
        setLatestTag(data[0].name);
      } catch (e) {
        console.log(e)
      }
    }

    fetchReleaseTag()
  }, [])

  const CardFooterCTA = ({ cta }) => {
    const { content, type } = cta

    if (type === 'single') {
      if (content.logoSrc) {
        return (
          <Link className="card-cta__single-link" to={content.link}>
            <img className="card-cta__logo" src={content.logoSrc} alt={content.logoAlt} />
          </Link>
        )
      }

      return (
        <Link className="card-cta__single-link" to={content.link}>
          {content.text}
        </Link>
      )
    }

    if (type == 'double') {
      return (
        <div className="card-cta-container">
          {content.map((ctaInfo, i) => {
            if (ctaInfo.logoSrc) {
              return (
                <Link
                  key={i}
                  className="card-cta__logo-link"
                  to={ctaInfo.link}
                >
                  <img className="card-cta__logo" src={ctaInfo.logoSrc} />
                </Link>
              )
            } else {
              return (
                <Link key={i} className="card-cta__docs-link" to={ctaInfo.link}>
                  <span className="card-cta__text">{ctaInfo.text}</span>
                  <img src='/img/icons/arrow-forward.svg' alt="Forward arrow icon" />
                </Link>
              )
            }
          })}
        </div>
      )
    }
  }

  const ImageCard = ({ cta, description, image, title }) => {
    return (
      <div className="image-card-container">
        <div className="image-card__image">
          <Image img={image.src} alt={image.alt} />
        </div>
        <div className="image-card__body">
          <h4>{title}</h4>
          <p>{description}</p>
          <CardFooterCTA cta={cta} />
        </div>
      </div>
    )
  }

  const InfoCard = ({ cta, description, title }) => {
    return (
      <div className="info-card-container">
        <div className="info-card__body">
          <h3>
            {title}
            {latestTag && <span className="latest-tag">{latestTag}</span>}
          </h3>
          <p>{description}</p>
          <CardFooterCTA cta={cta} />
        </div>
      </div>
    )
  }

  const LinkCard = ({ cta, links, title }) => {
    return (
      <div className="link-card-container">
        <div className="link-card__body">
          <h3>{title}</h3>
          <ul className="link-card__list">
            {links.map((link, i) =>
              <li key={i}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            )}
          </ul>
          <CardFooterCTA cta={cta} />
        </div>
      </div>
    )
  }

  const renderCard = () => {
    if (type === "imageCard") {
      return (
        <ImageCard
          cta={cta}
          description={description}
          image={image}
          title={title}
        />
      )
    } else if (type === "linkCard") {
      return (
        <LinkCard title={title} links={links} cta={cta} />
      )
    } else {
      return <InfoCard cta={cta} description={description} title={title} />
    }
  }

  return (
    <>{renderCard()}</>
  )
}

export default Card
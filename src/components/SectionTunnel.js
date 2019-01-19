import React from "react";
import { MarkDownContent } from "../components/Content";
import { BlogContent } from "../components/BlogContent";
import ContactForm from "../components/ContactForm";
import Link from "gatsby-link";
export const SectionTunnel = (
  {
    node: {
      rawMarkdownBody,
      html,
      frontmatter: {
        title,
        sectionType,
        theme,
        class: className,
        alignment,
        language
      }
    }
  },
  edges
) => {
  const commonProps = {
    key: title,
    className: `section ${sectionType} angled bg-${theme} text${alignment} ${
      className ? className : ""
    }`,
    html,
    language
  };
  switch (sectionType) {
    case "contact":
      return <ContactForm {...commonProps} />;
    case "blog":
      const blogPosts = edges.filter(
        edge => edge.node.frontmatter.templateKey === "blog-post"
      );
      return <BlogContent {...commonProps} blogPosts={blogPosts} html={html} />;
    case "hero":
      const revertedLanguage = language === "fi" ? "en" : "fi";
      return (
        <div>
          <MarkDownContent {...commonProps} markdown={rawMarkdownBody}>
            <Link to={language === "fi" ? `/en/` : "/"}>
              <img
                className="hero--flag"
                src={`/img/${revertedLanguage}.svg`}
              />
            </Link>
          </MarkDownContent>
        </div>
      );

    default:
      return <MarkDownContent {...commonProps} markdown={rawMarkdownBody} />;
  }
};

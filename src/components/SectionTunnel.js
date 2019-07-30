import React from "react";
import { MarkDownContent } from "../components/Content";
import { BlogContent } from "../components/BlogContent";
import ContactForm from "../components/ContactForm";
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
      const blogPosts = edges
        .filter(edge => edge.node.frontmatter.templateKey === "blog-post")
        .sort(
          (aEdge, bEdge) =>
            new Date(bEdge.node.frontmatter.date) >
            new Date(aEdge.node.frontmatter.date)
        );
      return <BlogContent {...commonProps} blogPosts={blogPosts} html={html} />;
    default:
      return <MarkDownContent {...commonProps} markdown={rawMarkdownBody} />;
  }
};

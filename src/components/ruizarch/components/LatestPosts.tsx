import Data from "@/data/sections/latest-posts.json";
import Date from "../lib/date";
import Link from "next/link";
import Image from "next/image";
import { PostData } from "../lib/posts";

interface LatestPostsSectionProps {
  posts: PostData[];
  paddingTop?: boolean;
}

const LatestPostsSection = ({ posts, paddingTop }: LatestPostsSectionProps) => {
  // Filter posts that have all required fields
  const validPosts = posts.filter(
    (
      post
    ): post is PostData & {
      image: string;
      title: string;
      category: string;
      short: string;
    } => {
      return !!(post.image && post.title && post.category && post.short);
    }
  );

  return (
    <>
      {/* blog */}
      <section>
        <div
          className={
            paddingTop ? "container mil-p-120-60" : "container mil-p-0-60"
          }
        >
          <div className="mil-background-grid mil-softened" />

          <div className="row">
            <div className="col-12">
              <div className="mil-center mil-mb-90">
                <span
                  className="mil-suptitle mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: Data.subtitle }}
                />
                <h2
                  className="mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: Data.title }}
                />
                <a
                  href={Data.button.link}
                  className="mil-link mil-upper mil-up"
                >
                  {Data.button.button}
                  <span className="mil-arrow">
                    <Image
                      src="/img/icons/1.svg"
                      alt="arrow"
                      width={16}
                      height={16}
                    />
                  </span>
                </a>
              </div>
            </div>
            {validPosts.slice(0, Data.numOfItems).map((item, key) => (
              <div className="col-lg-6" key={`blog-post-${key}`}>
                <Link
                  href={`/blog/${item.id}`}
                  className="mil-blog-card mil-mb-60"
                >
                  <div className="mil-cover mil-up mil-long">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                    />
                    <div className="mil-date">
                      <Date dateString={item.date} />
                    </div>
                  </div>
                  <div className="mil-description">
                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                      {item.category}
                    </span>
                    <h4 className="mil-upper mil-up mil-mb-30">{item.title}</h4>
                    <p className="mil-up">{item.short}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* blog end */}
    </>
  );
};

export default LatestPostsSection;

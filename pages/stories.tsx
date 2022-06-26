import PageHead from "components/head";
import SiteLayout from "components/layouts/site";
import { FeaturedStory } from "components/stories";
import { NextPage } from "next";

const Stories: NextPage = (props: any) => {
    return (
        <SiteLayout>
            <PageHead title="Customer Stories | DALD" />
            <FeaturedStory />
        </SiteLayout>
    );
};

export default Stories
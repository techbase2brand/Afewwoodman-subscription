// import {
//   Card,
//   Page,
//   Layout,
//   TextContainer,
//   Image,
//   Stack,
//   Link,
//   Text,
// } from "@shopify/polaris";
// import { TitleBar } from "@shopify/app-bridge-react";

// import { trophyImage } from "../assets";

// import { ProductsCard } from "../components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import OverView from "../components/OverView/OverView";
import './Page.css';
import SideNavbar from "../components/SideNavbar/SideNavbar";
import Occassions from "../components/Occassions/Occassions";
import FathersDay from "../components/FathersDay/FathersDay";
import LiveEvents from "../components/LiveEvents/LiveEvents";
import Stylists from "../components/Stylists/Stylists";
import OrderStatus from "../components/OrderStatus/OrderStatus";

export default function HomePage() {
  return (
    <>
      <div className="all-app-content-os">
        <div className="app-left-navbar-os">
          <SideNavbar />
        </div>
        <div className="app-right-content-os">
          <Header />
          <div className="app-right-content-os-1">
            {/* <BrowserRouter> */}
              <Routes>
                <Route path="/" element={<OverView />} />
                <Route path="/occassions" element={<Occassions />} />
                <Route path="/fathersday" element={<FathersDay />} />
                <Route path="/liveevents" element={<LiveEvents />} />
                <Route path="/stylists" element={<Stylists />} />
                <Route path="/orderstatus" element={<OrderStatus />} />
              </Routes>
            {/* </BrowserRouter> */}
          </div>
        </div>
      </div>
    </>
    // <Page narrowWidth>
    //   <TitleBar title="App name" primaryAction={null} />
    //   <Layout>
    //     <Layout.Section>
    //       <Card sectioned>
    //         <Stack
    //           wrap={false}
    //           spacing="extraTight"
    //           distribution="trailing"
    //           alignment="center"
    //         >
    //           <Stack.Item fill>
    //             <TextContainer spacing="loose">
    //               <Text as="h2" variant="headingMd">
    //                 Nice work on building a Shopify app 🎉
    //               </Text>
    //               <p>
    //                 Your app is ready to explore! It contains everything you
    //                 need to get started including the{" "}
    //                 <Link url="https://polaris.shopify.com/" external>
    //                   Polaris design system
    //                 </Link>
    //                 ,{" "}
    //                 <Link url="https://shopify.dev/api/admin-graphql" external>
    //                   Shopify Admin API
    //                 </Link>
    //                 , and{" "}
    //                 <Link
    //                   url="https://shopify.dev/apps/tools/app-bridge"
    //                   external
    //                 >
    //                   App Bridge
    //                 </Link>{" "}
    //                 UI library and components.
    //               </p>
    //               <p>
    //                 Ready to go? Start populating your app with some sample
    //                 products to view and test in your store.{" "}
    //               </p>
    //               <p>
    //                 Learn more about building out your app in{" "}
    //                 <Link
    //                   url="https://shopify.dev/apps/getting-started/add-functionality"
    //                   external
    //                 >
    //                   this Shopify tutorial
    //                 </Link>{" "}
    //                 📚{" "}
    //               </p>
    //             </TextContainer>
    //           </Stack.Item>
    //           <Stack.Item>
    //             <div style={{ padding: "0 20px" }}>
    //               <Image
    //                 source={trophyImage}
    //                 alt="Nice work on building a Shopify app"
    //                 width={120}
    //               />
    //             </div>
    //           </Stack.Item>
    //         </Stack>
    //       </Card>
    //     </Layout.Section>
    //     <Layout.Section>
    //       <ProductsCard />
    //     </Layout.Section>
    //   </Layout>
    // </Page>
  );
}

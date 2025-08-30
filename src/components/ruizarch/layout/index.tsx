import "/public/styles/css/plugins/bootstrap-grid.css";
import "/public/styles/css/plugins/magnific-popup.css";
import "/public/styles/css/plugins/swiper.min.css";
import "/public/styles/css/plugins/global.css";
import "/public/styles/scss/style.scss";

import { register } from "swiper/element";
// register Swiper custom elements
register();

import AppData from "@/data/app.json";
import { ReactNode } from "react";
import ScrollbarProgressModule from "../components/ScrollbarProgress";
import DefaultHeader from "./header";
import DefaultFooter from "./footer";

export const metadata = {
  title: {
    default: AppData.settings.siteName,
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

const RuizArchLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <DefaultHeader />
      <div className="mil-wrapper">
        {children}
        <DefaultFooter />
        <ScrollbarProgressModule />
      </div>
    </>
  );
};

export default RuizArchLayout;

import metadata from "@/data/metadata";
import React from "react";
import SocialIcon from "./social-icons";
// import SocialIcon from "@/components/social-icons";

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div>
          {/* <SocialIcon kind="mail" href={`mailto:${metadata.email}`} size="6" /> */}
          <SocialIcon />
          {/* <SocialIcon kind="github" href={metadata.github} size="6" />
          <SocialIcon kind="facebook" href={metadata.facebook} size="6" />
          <SocialIcon kind="linkedin" href={metadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={metadata.twitter} size="6" /> */}
        </div>
        <p className="text-sm text-slate-500">
          &copy; {metadata.author}, {new Date().getFullYear()}. All rights
          reserved
        </p>
      </div>
    </footer>
  );
}

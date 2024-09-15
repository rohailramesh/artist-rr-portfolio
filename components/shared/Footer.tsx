import Image from "next/image";
import Link from "next/link";
import styles from "@/components/shared/HomePage.module.css";

const Footer = () => (
  <footer className="border-t">
    <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
      <Link href="/">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={128}
          height={38}
        />
      </Link>

      <p className="text-primary-500">REEHA R. 2024. All Rights reserved.</p>

      {/* Instagram Icon with Link */}
      <Link href="https://www.instagram.com/reebolly/" target="_blank">
        <Image
          src="/assets/icons/insta.svg"
          alt="Instagram"
          width={24}
          height={24}
        />
      </Link>
    </div>
  </footer>
);

export default Footer;

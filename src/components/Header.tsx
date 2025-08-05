import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      <div className="animHolder">
        <div className="snowflake">
          <Image width={100} height={100} alt={'floating-icon'} src="/images/anim1.png" />
        </div>
        <div className="snowflake">
          <Image width={100} height={100} alt={'floating-icon'} src="/images/anim2.png" />
        </div>
        <div className="snowflake">
          <Image width={100} height={100} alt={'floating-icon'} src="/images/anim4.svg" />
        </div>
        <div className="snowflake">
          <Image width={100} height={100} alt={'floating-icon'} src="/images/anim5.svg" />
        </div>
        <div className="snowflake">
          <Image width={100} height={100} alt={'floating-icon'} src="/images/anim6.svg" />
        </div>
        <div className="snowflake">
          <Image width={100} height={100} alt={'floating-icon'} src="/images/anim7.svg" />
        </div>
        <div className="snowflake">
          <Image width={100} height={100} alt={'floating-icon'} src="/images/anim8.svg" />
        </div>
        <div className="snowflake">
          <Image width={100} height={100} alt={'floating-icon'} src="/images/anim9.svg" />
        </div>
        <div className="snowflake">
          <Image width={100} height={100} alt={'floating-icon'} src="/images/anim10.svg" />
        </div>
      </div>
      <header id="header">
        <div className="container">
          <div className="logo">
            <Link href="/">
              <Image width={200} height={200} alt={'floating-icon'} src="/images/logo-h.png" />
            </Link>
          </div>
          {/* <!--        <nav id="nav">-->
<!--            <Link href="#" className="nav-opener"><i className="fal fa-close"></i> </Link>-->
<!--            <ul>-->
<!--                <li><Link href="index.php">Home</Link></li>-->
<!--                <li><Link href="#ContactUs">Let's Connect</Link></li>-->
<!--            </ul>-->
<!--            <div className="blobAnim">-->
<!--                <div className="blob-btn">-->
<!--                    <span className="blob-btn__inner">-->
<!--                      <span className="blob-btn__blobs">-->
<!--                        <span className="blob-btn__blob"></span>-->
<!--                        <span className="blob-btn__blob"></span>-->
<!--                        <span className="blob-btn__blob"></span>-->
<!--                        <span className="blob-btn__blob"></span>-->
<!--                      </span>-->
<!--                    </span>-->
<!--                </div>-->
<!--                <br/>-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">-->
<!--                    <defs>-->
<!--                        <filter id="goo">-->
<!--                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>-->
<!--                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>-->
<!--                            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>-->
<!--                        </filter>-->
<!--                    </defs>-->
<!--                </svg>-->
<!--            </div>-->
<!--        </nav>--> */}
          <div className="rightCol">
            <Link href="/#ContactUs" className="btn">
              <span className="d-none d-md-inline">Let&apos;s Connect</span>
              <span className="d-inline d-md-none">Connect</span>
            </Link>
            {/* <!-- <Link href="#" className="btn border">Let’s Connect</Link>--> */}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

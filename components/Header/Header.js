import Link from "next/link";
import React from "react";
import { Flex } from "./Header.style";
import { Title } from "../about/AboutPage.style";
import { useSession } from "next-auth/react";

const Header = () => {
  //const { data: session } = useSession();

  return (
    <Flex>
      <Title>Politico</Title>
      <ul>
        <li>
          <Link href="/">
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: 18,
              }}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: 18,
              }}
            >
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: 18,
              }}
            >
              Contact
            </a>
          </Link>
        </li>

        <li>
          <Link href="/auth/register">
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: 18,
              }}
            ></a>
          </Link>
        </li>

        <li>
          <Link href="/auth/register">
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: 18,
              }}
            >
              signIn
            </a>
          </Link>
        </li>
      </ul>
    </Flex>
  );
};

export default Header;

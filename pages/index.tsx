import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

const linkHighlightColor = '#1271EB';

const Main = styled.div`
  background-image: url('/signinBg.jpeg');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .bgOpacity  {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .mainWrapper {
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .netflixLogo {
    width: 212px;
    height: 100px;
    position: absolute;
    top: 2px;
    left: 20px;
    z-index: 30;
  }
  .userForm {
    position: absolute;
    z-index: 20;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    padding: 30px 70px;
    width: 450px;
    font-family: 'Helvetica Neue';

    h2 {
      font-size: 30px;
      font-weight: 500;
    }

    .inputGroup {
      display: flex;
      flex-direction: column;
      z-index: 30;

      input {
        padding: 20px;
        border-radius: 5px;
        margin-bottom: 20px;
        background-color: #333333;
        border: none;
        color: white;
      }

      input::placeholder {
        font-size: 14px;
        font-weight: 200;
        color: grey;
      }

      button {
        padding: 15px;
        border-radius: 5px;
        border: none;
        font-size: 16px;
        color: white;
        background-color: #fc0000;
      }

      button:hover {
        cursor: pointer;
      }
    }

    .checkGroup {
      display: flex;
      flex-direction: row;
      z-index: 30;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 14px;
        color: gray;
      }

      .rememberMe {
        display: flex;
        flex-direction: row;
        align-items: center;

        input[type='checkbox'] {
          width: 15px;
          height: 15px;
          margin-right: 8px;
          cursor: pointer;
          font-size: 17px;
        }
      }
    }

    .bottomSection {
      p {
        font-size: 14px;
        color: white;
      }

      span {
        color: ${linkHighlightColor};
        text-decoration: underline;
        cursor: pointer;
      }

      .facebook {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
        color: white;
        .facebookImage {
          width: 20px;
          height: 20px;
          margin-right: 8px;
        }
      }
    }
  }
`;

const Footer = styled.div`
  position: relative;
  z-index: 30;
  padding: 20px 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: gray;
  text-align: center;
  font-weight: 300;

  span {
    color: ${linkHighlightColor};
    cursor: pointer;
  }

  .listItems {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    font-size: 12px;
  }
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Welcome to Netflix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <div className="bgOpacity"></div>
        <div className="mainWrapper">
          <div className="netflixLogo">
            <Image
              src="/netflixLogo.png"
              width="1800"
              height="756"
              alt="netflix logo"
              layout="responsive"
            ></Image>
          </div>
          <div className="userForm">
            <h2>Sign In</h2>
            <div className="inputGroup">
              <input type="email" placeholder="Email or phone number" />
              <input type="password" placeholder="Password" />
              <button>Sign In</button>
            </div>
            <div className="checkGroup">
              <div className="rememberMe">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <p>Need help?</p>
            </div>
            <div className="bottomSection">
              <div className="facebook">
                <div className="facebookImage">
                  <Image
                    src="/facebookLogo.png"
                    width="1024"
                    height="1024"
                    layout="responsive"
                    alt="facebook logo"
                  ></Image>
                </div>

                <p>Login with Facebook</p>
              </div>
              <p>
                New to Netflix? <span>Sign up now</span>.
              </p>
              <p>
                This page is protected by Google reCAPTCHA to ensure you are not
                a bot. <span>Learn more</span>.
              </p>
            </div>
          </div>
        </div>
        <Footer>
          <p>
            Questions? Call: <span>0800-000-7969</span>{' '}
          </p>
          <div className="listItems">
            <p>FAQ</p>
            <p>Help Center</p>
            <p>Terms of Use</p>
            <p>Privacy</p>
            <p>Cookie Preferences</p>
            <p>Impressum</p>
          </div>
        </Footer>
      </Main>
    </div>
  );
};

export default Home;

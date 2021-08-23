import styled from "styled-components";

const DashboardWrapper = styled.div`
  display: flex;

  .sidebar {
    flex-shrink: 0;
    width: 0;
    overflow: hidden;
    background-color: rgba(123, 129, 162, 1);
    transition: 0.3s;
    height: 100vh;
    position: sticky;
    top: 0;
    padding-top: 20px;
    padding-bottom: 20px;

    &.show {
      width: 300px;
      padding: 20px;
    }

    nav {
      li {
        a {
          .MuiButtonBase-root {
            display: block !important;
            padding: 10px 20px !important;
            border-radius: 6px !important;
            background-color: rgba(255, 255, 255, 0.3) !important;
            color: white !important;
            margin-bottom: 10px !important;
            transition: 0.3s !important;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3) !important;
            min-width: 200px !important;
            overflow: hidden !important;

            &:hover {
              background-color: rgba(255, 255, 255, 0.5) !important;
            }
          }

          &.active {
            .MuiButtonBase-root {
              background-color: rgba(3, 169, 244, 1) !important;
              color: white !important;
            }
          }
        }
      }
    }
  }

  .rightside {
    flex: 1;
    /* flex: 1 1 0%; */
    /* overflow-x: hidden; */
    position: relative;

    header {
      padding: 20px;
      position: sticky;
      top: 0;
      background-color: white;
      z-index: 1000;

      .logo {
        height: 20px;
        margin-right: 20px;
      }
    }

    .content {
      padding: 20px;
    }
  }
`;

export default DashboardWrapper;
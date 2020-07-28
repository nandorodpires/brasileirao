import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`   
    * {
        margin: 0;
        padding: 0;
        outline: 0;    
        box-sizing: border-box;
        font-family: "Montserrat";
    }
    header  {
        display: flex;
        color: #FFF;
        align-items: center;
        justify-content: space-between;
        padding: 15px 25px;
        background-color: #0000C7
    }
    header > .title {
        font-size: 25px;
        font-weight: bold;
    }
    .container {
        width: 1440px;
        margin: 0 auto;
        padding: 15px;
    }
    .container ul {
        margin-top: 15px;
        display: flex;
        list-style: none;
    }
    .container li {
        cursor: pointer;
        color: #007300;
        font-size: 15px;
        padding: 5px 9px;
        margin-right: 15px;
        list-style-position:inside;
        border: 1px solid #007300;
    }
    .container li:hover, .container li.active {
        color: #FFF;
        background-color: #007300;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 30px;
    }
    .card {
        border: 1px solid #007300;
        min-width: 18%;
        margin: 0 15px 15px 0;       
    }
    .card-header {
        color: #FFF;
        text-align: center;
        font-size: 13px;
        padding: 7px;
        background-color: #007300;
    }
    .card-body {
        font-size: 18px;
        color: #0000C7;
        font-weight: bold;
        text-align: center;
        padding: 15px;
    }
    .card-body p {margin: 0; padding: 0}    
    .team-badge {
        width: 20px;
        margin-right: 7px;
    }    
`;

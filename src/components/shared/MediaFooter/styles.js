import styled from "styled-components";
import { black1, grey1, mediaTitleTextSize } from "../../../global/styles";

export const MediaNavItemTitle = styled.div`
    color: ${grey1};
    font-weight: bold;
    font-size: ${mediaTitleTextSize};
`;

export const MediaNavItems = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const MediaNavItem = styled.li`
    color: ${black1};
    font-weight: bold;
    font-size: 0.8em;
    margin-top: 0.5em;
`;

export const MediaIconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const MediaLinkIcon = styled.a`
    color: inherit;
`;

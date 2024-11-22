import styled from "styled-components";
import { Button } from "@/components/ui/button";

export const Divider = styled.span`
  border-bottom: 1px solid #ccc;
  margin: 1rem 0;
  padding-inline: 8px;
  height: 1px;
  width: 100%;
  align-self: center;
`;

export const DividersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  gap: 8px;
  padding: 0 24px;
`;

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  font-size: 14px;
  gap: 4px;
  width: 100%;
`;

export const SignInButton = styled(Button)`
  font-size: 14px;
  color: #5B84FF;
  padding:0;
  background: none;

  &:hover {
    background-color: transparent;
    color: #626AFE;
  }
`;
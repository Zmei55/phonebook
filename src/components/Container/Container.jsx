import React from 'react';
import { ContainerStyle } from './Container.styled';

export function Container({ children }) {
  return <ContainerStyle className="Container">{children}</ContainerStyle>;
}

import React, { PropsWithChildren } from 'react';
import { Box } from '@mui/system';
import { Logo } from '@example/ui-logo';

type Props = {} & PropsWithChildren;

export const Page = ({ children }: Props) => (
  <>
    <Box>
      <Logo />
    </Box>
    {children}
  </>
);

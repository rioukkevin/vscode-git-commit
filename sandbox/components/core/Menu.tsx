import { Link } from '@chakra-ui/react';
import { FC } from 'react';

export const Menu: FC<any> = () => {
  return (
    <div style={{ marginTop: 10, marginLeft: -10 }}>
      <Link style={{ margin: 10 }} href="/">
        Documentation
      </Link>
      <Link style={{ margin: 10 }} href="/configurator">
        Configurator
      </Link>
    </div>
  );
};

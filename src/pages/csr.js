import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import { useSettingsContext } from 'src/components/settings';
import { CSRView } from 'src/sections/csr/view';

// ----------------------------------------------------------------------

export default function CSRPage() {
  const theme = useTheme();
  const settings = useSettingsContext();

  return (
    <>
      <Helmet>
        <title>CSR | Quambiant</title>
      </Helmet>

      <CSRView />
    </>
  );
}

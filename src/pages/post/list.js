import { Helmet } from 'react-helmet-async';
// sections
import { PostListHomeView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export default function PostListHomePage() {
  return (
    <>
      <Helmet>
        <title> Quambiant: Newsroom</title>
      </Helmet>

      <PostListHomeView />
    </>
  );
}

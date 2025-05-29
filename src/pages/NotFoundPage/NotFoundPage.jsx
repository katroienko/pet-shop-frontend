

import PageLayout from "../../shared/components/PageLayout/PageLayout";
import NotFoundContent from "../../modules/NotFound/NotFoundContent";
import NotFoundImages from "../../modules/NotFound/NotFoundImages/NotFoundImages";

import styles from './NotFoundPage.module.css'



const NotFoundPage = () => {
  return (
    <PageLayout title="Page not found">
      {/* <Link to="/">To home page</Link> */}
      <section className={styles.wrapper}>
        <NotFoundImages />
        <NotFoundContent />
      </section>
    </PageLayout>
  );
};

export default NotFoundPage;

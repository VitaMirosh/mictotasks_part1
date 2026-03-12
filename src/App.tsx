import styles from './components/Site.module.css';
import {NavLink} from 'react-router-dom';
import {S} from './components/pages/_styles';
import {Outlet} from 'react-router-dom'
import {PATH} from './routes/router.tsx';


export const App = () => {
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <S.NavWrapper><NavLink to={PATH.ADIDAS}>Page1</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PUMA}>Page2</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.ABIBAS}>Page3</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PRICES}>Page4</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PROTECT}>Protected Page</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.ERROR404}></NavLink></S.NavWrapper>
        </div>
        <div className={styles.content}>
          <Outlet />
          {/*<Routes>*/}
          {/*  <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>*/}

          {/*  <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
          {/*  <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
          {/*  <Route path={PATH.PAGE3} element={<Abibas/>}/>*/}
          {/*  <Route path={PATH.PAGE4} element={<Prices/>}/>*/}

          {/*  /!*<Route path={'/adidas/:id'} element={<Model/>}/>*!/*/}
          {/*  <Route path={'/:model/:id'} element={<Model/>}/>*/}

          {/*  <Route path={'/*'} element={<Error404/>}/>*/}

          {/*  /!*<Route path={'/page/error'} element={<Error404/>}/>*!/*/}
          {/*  /!*<Route path={'/*'} element={<Navigate to={'/page/error'}/>}/>*!/*/}
          {/*</Routes>*/}
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export const useRoutes = routes => {
  const isAuth = useSelector(getIsAuth);
  const { permissions } = useSelector(getUserInfo);
  return routes.map((route, i) => {
    const { pageCategory, path } = route;
    switch (pageCategory) {
      case pageCategories.private:
        return !isAuth ? (
          <Redirect key={i} from={path} to="/auth" />
        ) : (
          <Route key={i} {...route} component={route.component} />
        );
      case pageCategories.public:
        return !isAuth ? (
          <Route key={i} {...route} component={route.component} />
        ) : (
          <Redirect key={i} from={path} to="/cabinet" />
        );
    }
  });
};

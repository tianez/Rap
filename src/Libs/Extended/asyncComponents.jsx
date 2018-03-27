import Loadable from 'react-loadable';
import styles from './asyncComponents.scss';

const LoadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
        return <Loading />;
    } else if (error) {
        return <LoadingError />;
    } else {
        return null;
    }
};

const LoadingError = () => (
    <div>Sorry,页面模块加载失败</div>
);

const Loading = () => (
    <div>模块加载中...</div>
)

const asyncComponent = importComponent => Loadable({
    loader: () => importComponent(),
    loading: LoadingComponent,
    delay: 300
})

export default asyncComponent
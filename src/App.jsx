import { Routes, Route } from 'react-router-dom';

import DefaultLayout from '@/layout/DefaultLayout';
import Home from '@/page/Home';
import Blog from '@/page/Blog';

function App() {
    return (
        <Routes>
            <Route path="" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="blog" element={<Blog />} />
            </Route>
        </Routes>
    );
}

export default App;

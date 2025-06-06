import React from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainStoreProvider from "./components/store-provider/MainStoreProvider";
import { AppContextProvider } from "./context/AppContext";
import "./index.css";
import "./loadcircle.css";
import DefaultLayout from "./views/DefaultLayout";
import HomeView from "./views/home/HomeView";
import PrivacyView from "./views/home/PrivacyView";
import ImprintView from "./views/home/ImprintView";
import AboutView from "./views/home/AboutView";

const router = createBrowserRouter(
    createRoutesFromElements(
        
            <Route path="/" element={<DefaultLayout />}>
                {/* <Route
                    index
                    element={
                        <ProtectedRoute>
                            <HomeView />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <ProtectedRoute>
                            <SettingsView />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/gallery"
                    element={
                        <ProtectedRoute>
                            <GalleryView />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/gallery/upload/multi"
                    element={
                        <ProtectedRoute>
                            <UploadMultiView />
                        </ProtectedRoute>
                    }
                />
                <Route path="/init" element={<InitialView />} />
                <Route path="/login" element={<LoginView />} /> */}
                <Route path="/" element={<HomeView />} />
                <Route path="/about" element={<AboutView />} />
                <Route path="/privacy" element={<PrivacyView />} />
                <Route path="/imprint" element={<ImprintView />} />
            </Route>
        
    )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AppContextProvider>
            <MainStoreProvider>
                <RouterProvider router={router} />
            </MainStoreProvider>
        </AppContextProvider>
    </React.StrictMode>
);

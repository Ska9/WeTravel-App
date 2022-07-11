import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { SnackbarProvider } from "notistack";

import { store } from './_helpers';
import { App } from './App';
import i18n from '../src/i18n';


render(
    <SnackbarProvider>
    <I18nextProvider i18n={i18n}>
    <Provider store={store}>
        <App />
    </Provider>
    </I18nextProvider>
    </SnackbarProvider>,
    document.getElementById('app')
);
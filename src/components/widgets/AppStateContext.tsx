import { createContextId } from '@builder.io/qwik';
import { AppState } from './AppStateType';


export const APP_STATE_CONTEXT_ID = createContextId<AppState>('app-state-context-id');
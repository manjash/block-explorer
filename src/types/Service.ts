export enum ServiceState {
  ERROR = 'error',
  INIT = 'init',
  LOADED = 'loaded',
  LOADING = 'loading',
}
interface ServiceInit {
  status: ServiceState.INIT
}
interface ServiceLoading {
  status: ServiceState.LOADING
}
interface ServiceLoaded<Payload> {
  status: ServiceState.LOADED
  payload: Payload
}
interface ServiceError {
  status: ServiceState.ERROR
  error: Error
}
export type Service<Payload> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<Payload>
  | ServiceError

import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error('App crashed:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
          <div className="max-w-lg w-full bg-white border rounded-xl shadow p-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Something went wrong</h1>
            <p className="mt-3 text-gray-700">The page failed to load due to a runtime error. Please refresh. If this persists, share this message with support.</p>
            {this.state.error && (
              <pre className="mt-4 text-left whitespace-pre-wrap text-sm bg-gray-100 p-3 rounded">{String(this.state.error)}</pre>
            )}
            <a href="/" className="inline-block mt-6 px-4 py-2 rounded bg-black text-white">Reload</a>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

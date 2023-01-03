function getEnvVar(key: string): string {
  const value = process.env[key]
  if (typeof value === 'undefined') {
    throw new Error(`\`${key}\` environment is required and is not set`)
  }
  return value
}

export const mongoDbConnectionString = getEnvVar('MONGO_DB_CONNECTION_STRING')

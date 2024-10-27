import fs from "fs"

const infoLogFilePath = "./logs/info.txt"
const warningLogFilePath = "./logs/warning.txt"
const errorLogFilePath = "./logs/error.txt"

export const convertTxtToArray = (fileData) => {
  const lines = fileData.split("\n")
  const headers = lines[0].trimEnd().split("\t")

  const data = lines.slice(1).map(line => {
    const values = line.trimEnd().split("\t")

    return headers.reduce((obj, header, index) => {
      obj[header] = values[index] !== undefined ? values[index] : ""
      return obj
    }, {})
  })

  return data
}

export const convertArrayToTxt = (data) => {
  if (data.length === 0) return ""

  const headers = Object.keys(data[0])
  const headerLine = headers.join("\t")

  const lines = data.map(row => {
    return headers.map(header => row[header]).join("\t")
  })

  return [headerLine, ...lines].join("\r\n")
}

export const logInfo = (infoMessage) => {
  console.log(`[INFO] ${infoMessage}`)

  const timestamp = new Date().toISOString()
  const logMessage = `[INFO] ${timestamp}: ${infoMessage}\n`

  fs.appendFile(infoLogFilePath, logMessage, (err) => {
    if (err) {
      console.error("Failed to write to info log:", err)
    }
  })
}

export const logWarning = (warningMessage) => {
  console.log(`[WARNING] ${warningMessage}`)

  const timestamp = new Date().toISOString()
  const logMessage = `[WARNING] ${timestamp}: ${warningMessage}\n`

  fs.appendFile(warningLogFilePath, logMessage, (err) => {
    if (err) {
      console.error("Failed to write to warning log:", err)
    }
  })
}

export const logError = (errorMessage) => {
  console.error(`[ERROR] ${errorMessage}`)

  const timestamp = new Date().toISOString()
  const logMessage = `[ERROR] ${timestamp}: ${errorMessage}\n`

  fs.appendFile(errorLogFilePath, logMessage, (err) => {
    if (err) {
      console.error("Failed to write to error log:", err)
    }
  })
}

export const clearLogFiles = () => {
  const logFiles = [infoLogFilePath, warningLogFilePath, errorLogFilePath]

  logFiles.forEach(filePath => {
    fs.writeFile(filePath, '', (err) => {
      if (err) {
        console.error(`Failed to clear log file: ${filePath}`, err)
      } else {
        console.log(`Cleared log file: ${filePath}`)
      }
    })
  })
}
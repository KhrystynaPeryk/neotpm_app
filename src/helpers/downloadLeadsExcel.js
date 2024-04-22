import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'

export const downloadLeadsExcel = async(leads) => {
    try {
        const worksheet = XLSX.utils.json_to_sheet(leads)
        const workbook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workbook, worksheet, "Leads")
    
        // Create a buffer and initiate the file download
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' })
        saveAs(blob, 'leads.xlsx')
    } catch (error) {
        console.error("Failed to download Excel:", error)
    }
}
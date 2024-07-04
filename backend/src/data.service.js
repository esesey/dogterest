import { Injectable } from '@nestjs/common'
const mysql = require('mysql2/promise')

@Injectable()
class DataService {
    constructor() {
        this.initDb()
    }

    async initDb() {
        this.db = await mysql.createConnection({
            host: 'localhost',
            //host: '9b61c29c5474f731fccd2ac41860a6af0c81efee167e3f08e0c58cf53bc4278a',
            port: 5432,
            user: 'postgres',
            password: 'postgres',
            database: 'postgres'
        })
    }

    async findAll() {
        const [rows] = await this.db.execute('SELECT filename FROM files')
        return rows.map(row => row.filename)
    }
}

module.exports = DataService
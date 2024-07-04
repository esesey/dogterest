import { Controller, Get } from '@nestjs/common'
import { DataService } from './data.service'

@Controller('data')
class DataController {
    constructor(DataService) {
        this.DataService = DataService
    }

    @Get()
    async findAll() {
        return this.DataService.findAll()
    }
}

module.exports = DataController
const Quotri = artifacts.require('./Quotri.sol')

contract('Quotri', (accounts) => {
  before(async () => {
    this.quotri = await Quotri.deployed()
  })

  it('deploys successfully', async () => {
    const address = await this.quotri.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it('lists quotes', async () => {
    const count = await this.quotri.count()
    const quote = await this.quotri.quotes(count)
    assert.equal(quote.id.toNumber(), count.toNumber())
    assert.equal(quote.content, 'Selamat datang di Quotri: hasilkan ethereum hanya dengan kutipan')
    assert.equal(quote.published, false)
    assert.equal(count.toNumber(), 1)
  })

  it('creates quotes', async () => {
    const result = await this.quotri.createQuote('A new quote')
    const count = await this.quotri.count()
    assert.equal(count, 2)
    const event = result.logs[0].args
    assert.equal(event.id.toNumber(), 2)
    assert.equal(event.content, 'A new quote')
    assert.equal(event.published, false)
  })

  it('quote published', async () => {
    const result = await this.quotri.publishQuote(1)
    const quote = await this.quotri.quotes(1)
    assert.equal(quote.published, true)
    const event = result.logs[0].args
    assert.equal(event.id.toNumber(), 1)
    assert.equal(event.published, true)
  })

})
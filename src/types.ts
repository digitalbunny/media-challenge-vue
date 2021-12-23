export type Media = {
    BibNum: number
    Title: string
    Author: string
    ISBN: string
    PublicationYear: number
    Publisher: string
    Subjects: string
    ItemType: string
    ItemCount: number
}

export type MediaType = {
    Code: string
    CodeType: string
    Description: string
    FormatGroup: string
    FormatSubgroup: string
    CategoryGroup: string
    CategorySubgroup: string
}

export type Checkout = {
    id: number
    BibNumber: number
    ItemBarcode: number
    ItemType: string
    CallNumber: string
    CheckoutDateTime: string
}

export type MediaResponse = {
    count: number
    offset: number
    limit: number
    results: Media[]
}
  
export type MediaDetail = {
    source: Media
    source_type: MediaType
    checkout: Checkout[]
}

export type FetchPayload = {
    search?: string
    offset?: number
    limit?: number
}

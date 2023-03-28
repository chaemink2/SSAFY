import axios from "axios";

// 운영중인 express가 존재하는 aws주소, port 8081(백엔드)
const DOMAIN = "http://potato-market.p-e.kr:8081";

const request = axios.create({
  baseURL: `${DOMAIN}/api`
});


export const api = {
  items: {
    findAll: () => request.get("/items"),
    findOne: (id) => request.get(`/items/${id}`),
    create: (name, description, file) => {
      // file업로드시 formData를 활용
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('file', file);
      return request.post("/items", formData, {
        headers: {
          "Content-Type":"multipart/form-data"
        }
      })
    },
    update: (id, name, description) => request.patch(`/items/${id}`, {
      name: name,
      // key와 value의 형태가 같으면 생략하겠다
      description:description
    }),
    updateImage: (id, file) => {
      const formData = new FormData();
      formData.append('file', file);
      return request.post(`/items/${id}/image`, formData, {
        headers: {
          "Content-Type":"multipart/form-data"
        }
      })
    },
    delete: (id) => request.delete(`/items/${id}`)
  },
  buyer: {
    findAll: () => request.get("/buyer"),
    create: (items_id, quantity, request_detail) => request.post('/buyer', {
      items_id: items_id,
      quantity,
      request_detail
    }),
    
    delete: (id) => request.delete(`/buyer/${id}`)
  }
}

 const express = require("express");
 const router = express.Router();

 let contacts = [
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" },
  { "id": 3, "name": "Charlie" },
  { "id": 4, "name": "John" }
];

 // ดึงรายชื่อผู้ติดต่อทั้งหมด
  router.get("/", (req, res) => {
    res.json(contacts);
});

// ดึงรายชื่อผู้ติดต่อตาม id
router.get("/:id", (req, res) => {
     const ID = parseInt(req.params.id);

     const resultByID = contacts.find(item => item.id === ID);
     if (!resultByID) {
        return res.status(404).json({ message: "ID not found" });
     };

     res.json(resultByID);
});

// เพิ่มรายชื่อผู้ติดต่อ
router.post("/", (req, res) => {
     const contact = req.body;
     contacts.push(contact);
     res.json({ message: "Contact inserted successfully", contacts});
});

// แก้ไขรายชื่อผู้ติดต่อ
router.put("/:id", (req, res) => {
     const ID = parseInt(req.params.id);
     const newContact = req.body;

     const index = contacts.findIndex(item => item.id === ID);
     if (index === -1)  {
        return res.status(404).json({ message: "ID not found" });
     };

     contacts[index] = { ...contacts[index], ...newContact }; 
     res.json({ message: "Contact updated successfully", contacts });
});

// ลบรายชื่อผู้ติดต่อ
router.delete("/:id", (req, res) => {
    const ID = parseInt(req.params.id);

    const resultByID = contacts.find(item => item.id === ID);
     if (!resultByID) {
        return res.status(404).res.json({ message: "ID not found" });
     };

     contacts = contacts.filter(item => item.id !== ID);
     res.json({ message: "Contact deleted successfully", contacts });
});

module.exports = router;
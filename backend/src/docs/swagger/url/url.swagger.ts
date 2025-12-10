/**
 * @swagger
 * tags:
 *   name: URL
 *   description: Operações relacionadas a URLs encurtadas
 */

/**
 * @swagger
 * /url:
 *   post:
 *     tags:
 *       - URL
 *     summary: Cria uma URL encurtada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               longUrl:
 *                 type: string
 *                 example: "https://google.com"
 *     responses:
 *       201:
 *         description: URL criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 slug:
 *                   type: string
 *                 longUrl:
 *                   type: string
 *                 clicks:
 *                   type: number
 *                 shortUrl:
 *                   type: string
 */

/**
 * @swagger
 * /url:
 *   get:
 *     tags:
 *       - URL
 *     summary: Retorna todas as URLs encurtadas
 *     responses:
 *       200:
 *         description: Lista de URLs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   slug:
 *                     type: string
 *                   longUrl:
 *                     type: string
 *                   clicks:
 *                     type: number
 *                   shortUrl:
 *                     type: string
 */

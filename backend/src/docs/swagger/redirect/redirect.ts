/**
 * @swagger
 * tags:
 *   name: Redirect
 *   description: Operações de redirecionamento de URLs encurtadas
 */

/**
 * @swagger
 * /{slug}:
 *   get:
 *     tags:
 *       - Redirect
 *     summary: Redireciona para a URL original
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: O slug gerado da URL encurtada
 *     responses:
 *       302:
 *         description: Redirecionamento bem-sucedido para a URL original
 *       404:
 *         description: URL não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Url não encontrada!"
 */
